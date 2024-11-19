import { reverseTranslateAPIRequest, reverseTranslateAPIResponse, translateAPIRequest, translateAPIResponse } from "@/types/translator";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const translateAPI = createApi({
  reducerPath: "filetranslateAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://supertranslate.onrender.com/",
  }),
  endpoints: (builder) => ({
    translateText: builder.mutation<reverseTranslateAPIResponse, reverseTranslateAPIRequest>({
      query: (reverseTranslatePayload) => ({
          url: `api/translate/file`,
          method: 'POST',
          body: reverseTranslatePayload,
      }),
  }),
  }),
});

export const { useTranslateFileMutation } = translateAPI;
