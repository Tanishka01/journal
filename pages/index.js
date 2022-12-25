import { useCallback, useEffect } from "react";
import "antd/dist/antd.min.css";
import { Button } from "@mui/material";
import { Collapse } from "antd";
import { useRouter } from "next/router";

const Desktop2 = () => {
  const router = useRouter();

  const onSignInClick = useCallback(() => {
    window.open("/desktop3");
  }, []);

  const onLogInClick = useCallback(() => {
    router.push("/desktop4");
  }, [router]);

  const onGroupButtonClick = useCallback(() => {
    window.open("/desktop5");
  }, []);

  const onGroupButton1Click = useCallback(() => {
    window.open("/desktop5");
  }, []);

  const onResourcesClick = useCallback(() => {
    window.open("/desktop3");
  }, []);

  const onAboutClick = useCallback(() => {
    window.open("/desktop3");
  }, []);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="relative bg-gray-300 w-full h-[2885px] overflow-hidden text-center text-lg text-black font-playfair-display">
      <b className="absolute top-[44px] left-[24px] font-koulen text-left inline-block w-[270px] h-[105px]">
        journal
      </b>
      <Button
        className="absolute top-[87px] left-[1098px] cursor-pointer"
        sx={{ width: 143 }}
        variant="text"
        color="primary"
        onClick={onSignInClick}
      >
        sign in
      </Button>
      <Button
        className="absolute top-[87px] left-[1241px] cursor-pointer"
        sx={{ width: 152 }}
        variant="text"
        color="primary"
        onClick={onLogInClick}
      >
        log in
      </Button>
      <div className="absolute top-[258px] left-[102px] w-[1241.91px] h-[687px]">
        <b className="absolute top-[120px] left-[0px] w-[576px] h-[376px]">
          <div className="absolute top-[0px] left-[0px] uppercase flex items-end w-[576px] h-[376px] [-webkit-text-stroke:1px_#000]">
            <span className="[line-break:anywhere] w-full">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span>blog</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px] text-sm font-plus-jakarta-sans">
                <span>create</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                <span>connect</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:0px] text-sm font-plus-jakarta-sans">
                <span>share</span>
              </p>
              <p className="m-[0]">
                <span>inspire</span>
              </p>
            </span>
          </div>
        </b>
        <Button
          className="absolute top-[530px] left-[161px] cursor-pointer"
          sx={{ width: 228 }}
          variant="contained"
          color="primary"
          href="/desktop-5"
          onClick={onGroupButtonClick}
        >
          create your blog
        </Button>
        <img
          className="absolute top-[0px] left-[750px] w-[491.91px] h-[530px] object-cover"
          alt=""
          src="../rectangle-7@2x.png"
        />
        <img
          className="absolute top-[31px] left-[597px] w-[504px] h-[656px] object-cover"
          alt=""
          src="../image-4@2x.png"
        />
      </div>
      <img
        className="absolute top-[1001px] left-[0px] w-[1443px] h-[887px] object-cover"
        alt=""
        src="../rectangle-8@2x.png"
      />
      <img
        className="absolute top-[1179px] left-[0px] w-[1443px] h-[556px] object-cover mix-blend-multiply"
        alt=""
        src="../rectangle-16@2x.png"
      />
      <img
        className="absolute top-[1217px] left-[272px] w-[316px] h-[490px] object-cover"
        alt=""
        src="../rectangle-9@2x.png"
      />
      <img
        className="absolute top-[1274px] left-[166px] w-[456px] h-[341px] object-cover"
        alt=""
        src="../image-5@2x.png"
      />
      <div className="absolute top-[1304px] left-[854px] text-gray-200 text-left inline-block w-[529px] h-[65px]">
        You do you.
      </div>
      <img
        className="absolute top-[1735px] left-[0px] w-[1443px] h-[1040px] object-cover"
        alt=""
        src="../rectangle-10@2x.png"
      />
      <b className="absolute top-[1814px] left-[390px] text-base text-white inline-block">
        “Blogging is a conversation, not a code.”
      </b>
      <Button
        className="absolute top-[2809px] left-[587px] cursor-pointer"
        sx={{ width: 228 }}
        variant="outlined"
        color="primary"
        href="/desktop-5"
        onClick={onGroupButton1Click}
      >
        create your blog
      </Button>
      <img
        className="absolute top-[1986px] left-[107px] w-[1240px] h-[681px] object-cover"
        alt=""
        src="../rectangle-17@2x.png"
      />
      <a
        className="[text-decoration:none] absolute top-[2011px] left-[130px] w-[462px] h-[629.39px] bg-[url(../public/image-11@3x.png)] bg-cover bg-no-repeat bg-[top] cursor-pointer [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]"
        href="https://www.architectsjournal.co.uk/news/kpf-submits-plans-for-23-storey-laboratory-at-canary-wharf"
        target="_blank"
        data-animate-on-scroll
      />
      <a
        className="[text-decoration:none] absolute top-[calc(50%_+_567.5px)] right-[124px] w-[700px] h-[282px] bg-[url(../public/image-10@3x.png)] bg-cover bg-no-repeat bg-[top] cursor-pointer [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]"
        href="https://stylebyemilyhenderson.com/blog/holiday-decor-around-our-farmhouse"
        target="_blank"
        data-animate-on-scroll
      />
      <a
        className="[text-decoration:none] absolute top-[calc(50%_+_859.5px)] left-[calc(50%_-_102.5px)] w-[341px] h-[328px] bg-[url(../public/image-8@3x.png)] bg-cover bg-no-repeat bg-[top] cursor-pointer [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]"
        href="https://www.stylecraze.com/articles/best-fashion-blogs/"
        target="_blank"
        data-animate-on-scroll
      />
      <a
        className="[text-decoration:none] absolute top-[2312px] left-[969px] w-[350px] h-[328px] bg-[url(../public/image-12@3x.png)] bg-cover bg-no-repeat bg-[top] cursor-pointer [&.animate]:animate-[1s_ease_0s_1_normal_forwards_pulsate] opacity-[1]"
        href="https://www.macrumors.com/2022/12/13/apple-emergency-sos-satellite-feature-uk/"
        target="_blank"
        data-animate-on-scroll
      />
      <Collapse
        className="absolute top-[1605px] left-[854px] mix-blend-normal"
        expandIconPosition="left"
        bordered={false}
      >
        <Collapse.Panel header="Know your audience" key="1" showArrow={true}>
          <p>
            Find out which posts are a hit with Blogger’s built-in analytics.
            You’ll see where your audience is coming from and what they’re
            interested in. You can even connect your blog directly to Google
            Analytics for a more detailed look.
          </p>
        </Collapse.Panel>
      </Collapse>
      <Collapse
        className="absolute top-[1515px] left-[854px]"
        expandIconPosition="left"
      >
        <Collapse.Panel
          header="Hang onto your memories"
          key="1"
          showArrow={true}
        >
          <p>
            Save the moments that matter. Blogger lets you safely store
            thousands of posts, photos, and more with Google.
          </p>
        </Collapse.Panel>
      </Collapse>
      <Collapse
        className="absolute top-[1421px] left-[854px]"
        expandIconPosition="left"
      >
        <Collapse.Panel
          header="Write now, publish later"
          key="1"
          showArrow={true}
        >
          <p>
            With post-scheduling, you can catch your readers at the best time
            for them. And for you. Write up a post, dial in a date, then leave
            it to your blog to hit publish.
          </p>
        </Collapse.Panel>
      </Collapse>
      <b
        className="absolute top-[87px] left-[824px] text-xs uppercase inline-block w-[143px] h-[71px] cursor-pointer"
        onClick={onResourcesClick}
      >
        resources
      </b>
      <b
        className="absolute top-[87px] left-[967px] text-xs uppercase inline-block w-[143px] h-[71px] cursor-pointer"
        onClick={onAboutClick}
      >
        about
      </b>
    </div>
  );
};

export default Desktop2;
