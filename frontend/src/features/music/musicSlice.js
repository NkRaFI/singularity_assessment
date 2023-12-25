import { apiSlice } from "../api/apiSlice";


export const musicSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=> ({
        searchMusic: builder.mutation({
            query: ({ query })=> ({
                url: `/music/search?${query ? `query=${query}` : ""}`,
                method: "GET"
            })
        }),
        getMusic: builder.query({
            query: (id)=>`/music/${id}`,
            providesTags: ["getMusic"]
        })
    })
})

export const {
    useSearchMusicMutation,
    useGetMusicQuery,
} = musicSlice