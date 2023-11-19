import { useEffect } from "react";

export const AdBanner = (props: any) => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "block",
        textAlign: "center",
        width: "250px",
        height: "250px",
      }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-8861487414672205"
      data-ad-slot="7222228947"
    ></ins>
  );
};
