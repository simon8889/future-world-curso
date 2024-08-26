import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccesTokenCreate"
import { cookies } from "next/headers"

export const createAccesToken = async (email: string, password: string) => {
	const cookiesStore = cookies()
	const graphClient = GraphQLClientSingleton.getInstance().getClient()
	const { customerAccessTokenCreate } = await graphClient.request(customerAccessTokenCreateMutation, {
		"email": email, 
		"password": password
	})
	
	console.log(customerAccessTokenCreate)
	
	const { accessToken, expiresAt} = customerAccessTokenCreate.customerAccessToken

	if (accessToken){
		cookiesStore.set("accesToken", accessToken, {
			path: "/",
			expires: new Date(expiresAt),
			httpOnly: true,
			sameSite: "strict"
		})
	}	
	
	return accessToken
}