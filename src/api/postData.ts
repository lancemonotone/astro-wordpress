const postData = await fetch(import.meta.env.WORDPRESS_URL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: ` {
              spaceLaunches {
                  edges {
                    node {
                        title
                        pilot
                        flightDate
                        callSign
                    }
                  }
              }
            }`,
  }),
}).then((response) => response.json());

const d = postData?.data?.spaceLaunches?.edges.map((edge: any) => edge.node);
console.log(d);

export const data = d;
