import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

export const validateAccessToken = async () => {
	const cookiesStore = cookies()
	const token = cookiesStore.get("accesToken")?.value
	if (!token) return token
	const graphClient = GraphQLClientSingleton.getInstance().getClient()
	const { customer } = await graphClient.request(customerName, {
		customerAccessToken: token
	})
	
	return customer
	

}