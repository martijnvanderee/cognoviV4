import { useEffect } from "react";

export const AdBanner = (props: any) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.log(err);
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: "block",
        overflow: "hidden",
      }}
      data-ad-client="ca-pub-8861487414672205"
      data-ad-slot="7222228947"
      {...props}
    />
  );
};
