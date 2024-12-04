import Button from "@mui/material/Button";

function Header() {
  return (
    <div className="header w-[100%] ">
      <div className="flex flex-row-reverse p-3 ml-5">
        <Button color="black" variant="outlined">
          Get Started
        </Button>
        <Button>Product</Button>
        <Button>Solution</Button>
        <a>Pricing</a>
        <a>Rresources</a>
        <a>Company</a>
        <a>Careers</a>
        <a>Home</a>
      </div>
    </div>
  );
}

export default Header;
