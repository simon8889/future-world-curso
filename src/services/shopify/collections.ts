import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import { title } from "process"

export const getCollections = async () => {
	try{
		const respose = await fetch(shopifyUrls.collections.all, {
			headers: new Headers({
				"X-Shopify-Access-Token": env.SHOPIFY_TOKEN
			})
		})
		const { smart_collections } = await respose.json()
		const transformedCollections  = smart_collections.map((collection: any) =>{
			return {
				id: collection.id,
				title: collection.title,
				handle: collection.handle
			}
		})
		return transformedCollections
	} catch (e) {
		console.log(e)
	}
}

export const getCollectionProducts = async (id: string) =>{
	try{
		const respose = await fetch(shopifyUrls.collections.products(id), {
			headers: new Headers({
				"X-Shopify-Access-Token": env.SHOPIFY_TOKEN
			})
		})
		const { products } = await respose.json()
		return products
	} catch (e) {
		console.log(e)
	}
}