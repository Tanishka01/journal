import { TextField } from "@mui/material";

const Desktop5 = () => {
  return (
    <main className="relative bg-gray-100 w-full h-[1024px] overflow-hidden text-center text-base text-black font-koulen">
      <TextField
        className="absolute top-[448px] left-[211px]"
        sx={{ width: 1018 }}
        color="warning"
        variant="outlined"
        multiline
        rows={20}
        label="type here"
        margin="none"
        required
      />
      <b className="absolute top-[21px] left-[51px] text-lg text-left inline-block w-[270px] h-[105px]">
        journal
      </b>
      <a className="absolute top-[99px] left-[321px] leading-[50px] font-playfair-display text-[inherit] flex items-end justify-center w-[805px] h-[158px] [text-decoration:none]">
        Blogging is not rocket science. It’s about being yourself and putting
        what you have into it.
      </a>
      <a className="absolute top-[385px] left-[271px] leading-[50px] font-lateef inline-block [text-decoration:none] text-[inherit]">
        <span>let’s begin...</span>
        <span className="text-white">.</span>
      </a>
      <img
        className="absolute top-[354px] left-[186px] rounded-[20px] w-[70px] h-[81px] object-cover"
        alt=""
        src="../image-7@2x.png"
      />
    </main>
  );
};

export default Desktop5;
