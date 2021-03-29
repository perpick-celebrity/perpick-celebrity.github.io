import Request from "../utils/HttpClient.js";
const Apis = {
  getTotalWitjCelebrity: () => Request({
    url: "perfume/generate/celebrity",
    method: "GET"
  }),
  getPerfumesWithCelebrity: ({select, match, filter}) => Request({
    url: "perfume/generate/celebrity",
    method: "POST",
    data: {
      select: JSON.stringify(select),
      search: {
        body: {
          query: {
            bool: {
              should: [
                {match: {reviews: {query: match.join(" ")}}}
              ],
              filter: {
                terms: {
                  ...filter
                }
              }
            }
          }
        }
      }
    }
  })
};
export default Apis;
