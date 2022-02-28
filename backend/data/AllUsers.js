import bcrypt from "bcryptjs";

const AllUsers = [
  {
    name: "Lucas Hoffmann",
    email: "example@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Peter Pan",
    email: "example1@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Mario Müller",
    email: "example2@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Konstantin Konst",
    email: "example3@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default AllUsers;
