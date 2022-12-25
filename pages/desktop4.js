import { TextField } from "@mui/material";

const Desktop4 = () => {
  return (
    <main className="relative bg-gray-100 w-full h-[986px] overflow-hidden text-center text-xs text-black font-playfair-display">
      <img
        className="absolute top-[322px] left-[472px] w-[497px] h-[381px] object-cover"
        alt=""
        src="../rectangle-12@2x.png"
      />
      <b className="absolute top-[371px] left-[551px] uppercase inline-block w-[339px] h-[59px]">
        log in
      </b>
      <TextField
        className="absolute top-[481px] left-[541px]"
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
        className="absolute top-[577px] left-[541px]"
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
      <b className="absolute top-[38px] left-[63px] text-lg font-koulen text-left inline-block w-[270px] h-[105px]">
        journal
      </b>
      <img
        className="absolute top-[349px] left-[443px] rounded-[20px] w-[70px] h-[81px] object-cover"
        alt=""
        src="../image-7@2x.png"
      />
    </main>
  );
};

export default Desktop4;
