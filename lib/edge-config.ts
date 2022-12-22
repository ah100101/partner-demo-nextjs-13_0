import { get, has } from "@vercel/edge-config";

const blogFeatureFlagEnabled = async (): Promise<boolean> => {
  try {
    const hasBlogCtaFlag: boolean = await has("showBlogCta");

    if (!hasBlogCtaFlag) return false;

    const showBlogCta: boolean | undefined = await get("showBlogCta");

    return !!showBlogCta;
  } catch (error) {
    console.error({ message: "Error fetching Edge Config", error });
    return false;
  }
};

export { blogFeatureFlagEnabled };
