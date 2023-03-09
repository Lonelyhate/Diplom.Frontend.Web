import axios from "axios";
import { IAxiosError } from "../../AxiosError";
import { IBlog } from "../../Blog";
import ApiType from "../ApiType";
import BaseAPI from "../BaseAPI";
import { IBaseResponse } from "../BaseResponse";

class BlogAPI extends BaseAPI {
    BaseUrl = "http://localhost:5000/api/blog/"

    public async GetBlogs() {
        return await this.SendAsync<IBlog[]>({
            ApiType: ApiType.GET,
            Url: "",
        })
    }

    public async CreateBlogForm(blog: IBlog) {
        const formData = new FormData();
        formData.append("title", blog.title);
        let numimg = 0;

        blog.content.forEach((content, i) => {
            if (content.image) {
                formData.append("image", content.image)
                formData.append("text", content.text + `;;;paragimgnomer_${numimg}`)
                numimg++;
            } else {
                formData.append("image", "not")
                formData.append("text", content.text)
            }
        })

        try {
            const response = await axios.post(this.BaseUrl + "create", formData)
            return response.data as IBaseResponse<IBlog>;
        } catch(e) {
            return (e as IAxiosError<IBlog>).response.data
        }
    }
}

export default new BlogAPI();