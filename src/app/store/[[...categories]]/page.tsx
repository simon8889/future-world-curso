import { ProductsWrapper } from "app/components/store/ProductsWrapper/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"
import { Amiri_Quran } from "next/font/google"

interface CategoriesProps {
	params: {
		categories: string[] 
	},
	
	searchParams: {
		search?: string
	}

} 

export default async function Categories(props: CategoriesProps){
	const { categories } = props.params
	let products = []
	if (categories?.length > 0){ 
		const collections = await getCollections()
		const selectedCollectionId = collections.find((collection: any) => collection.handle === categories[0])?.id
		products = await getCollectionProducts(selectedCollectionId)
	} else {
		products = await getProducts()
	}
	return(
		 <ProductsWrapper products={ products }></ProductsWrapper>
	)

}