import { TextField } from "@mui/material";

const Desktop3 = () => {
  return (
    <main className="relative bg-gray-100 w-full h-[1024px] overflow-hidden text-center text-xs text-black font-playfair-display">
      <b className="absolute top-[336px] left-[551px] uppercase inline-block w-[339px] h-[59px]">
        sign up
      </b>
      <img
        className="absolute top-[286px] left-[471px] w-[499px] h-[512px] object-cover"
        alt=""
        src="../rectangle-121@2x.png"
      />
      <TextField
        className="absolute top-[446px] left-[541px]"
        sx={{ width: 358 }}
        color="primary"
        variant="outlined"
        multiline
        rows={1}
        label="NAME"
        placeholder="Textarea placeholder"
        margin="none"
        required
      />
      <TextField
        className="absolute top-[542px] left-[541px]"
        sx={{ width: 358 }}
        color="primary"
        variant="outlined"
        multiline
        rows={1}
        label="E MAIL"
        placeholder="Textarea placeholder"
        margin="none"
        required
      />
      <TextField
        className="absolute top-[638px] left-[541px]"
        sx={{ width: 358 }}
        color="primary"
        variant="outlined"
        multiline
        rows={1}
        label="PASSWORD"
        placeholder="Textarea placeholder"
        margin="none"
        required
      />
      <b className="absolute top-[31px] left-[46px] text-lg font-koulen text-left inline-block w-[270px] h-[105px]">
        journal
      </b>
      <img
        className="absolute top-[325px] left-[443px] rounded-[20px] w-[70px] h-[81px] object-cover"
        alt=""
        src="../image-7@2x.png"
      />
    </main>
  );
};

export default Desktop3;
