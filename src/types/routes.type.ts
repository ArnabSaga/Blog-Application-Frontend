// [
//   {
//     title: "User Management",
//     items: [
//       {
//         title: "Analytics",
//         url: "/analytics",
//       },
//     ],
//   },
// ];

export interface Routes {
  title: string;
  items: {
    title: string;
    url: string;
  }[];
}
