import { PRODUCT_API_ADDRESS } from "../Env"

export const useFirstImage = (images: string): string => {
    return PRODUCT_API_ADDRESS + images.split(";")[0]
}