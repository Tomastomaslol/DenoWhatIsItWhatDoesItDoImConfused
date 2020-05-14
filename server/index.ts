import { Server, Request, Response } from "https://deno.land/x/rute/mod.ts";

const app: Server = new Server();
app.get("/",  async (req: Request, res: Response) => {
  const data = await fetch(
    "https://gist.githubusercontent.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071/raw/30fb98f124445596a2a96f60a233ab13d07167d0/flowers.json"
  );
  const json = await data.json();
  res.set(json);
});
app.listen({ port: 8000 });
