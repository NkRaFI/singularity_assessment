import { apiSlice } from "../api/apiSlice";


export const musicSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        searchMusic: builder.mutation({
            query: ({ query })=> ({
                url: `/music/search?${query ? `query=${query}` : ""}`,
                method: "GET"
            })
        })
    })
})

export const {
    useSearchMusicMutation
} = musicSlice