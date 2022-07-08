import bcrypt from "bcryptjs";

const users = [
  {
    email: "nxvinh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "pcba@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "tvvinh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "ltson@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "pttong@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "bqdi@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "nnhuy@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "nnthao@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "pnthanh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "ntlam@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "vdkha@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "ndtien@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "pttanh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "ltkngan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "tnahuy@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "mthlan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "ttmhanh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "npthuyet@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "tmnhut@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "doctor"
  },
  {
    email: "dtdat@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "customer"
  },
  {
    email: "nanhuy@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "customer"
  },
  {
    email: "nvddanh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "customer"
  },
  {
    email: "tqtuan@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "customer"
  },
  {
    email: "tmcanh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    role: "customer"
  },
];

export default users;
