import { IUser } from "./IUser";

const allChatUsers: IUser[] = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    id: 0,
    name: "Tim Hover",
    message: [
      { type: "", msg: "Hi Yan, How are you?", data: "19/08/2022", time: "21:18" },
      { type: "other", msg: "I am fine.", data: "19/08/2022", time: "21:19" },
      { type: "other", msg: "What about you?", data: "19/08/2022", time: "21:25" },
      { type: "", msg: "Awesome these days.", data: "19/08/2022", time: "21:31" },
      { type: "other", msg: "Finally. What's the plan? Please answer quickly", data: "19/08/2022", time: "21:32" , trecker: 12, listTime:'Feb 12, 2017' }
    ],
    dataLast: "Feb 12, 2017"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
    id: 1,
    name: "Allen Woodley",
    message: [
      { type: "", msg: "Hi Yan, How are you?", data: "19/08/2022", time: "21:18" },
      { type: "other", msg: "I am fine.", data: "19/08/2022", time: "21:19" },
      { type: "other", msg: "What about you?", data: "19/08/2022", time: "21:25" },
      { type: "", msg: "Awesome these days.", data: "19/08/2022", time: "21:31" },
      { type: "other", msg: " What's the plan? You are a very bad friend", data: "19/08/2022", time: "21:32", trecker: 10, listTime:'Feb 11, 2017' }
    ],
    dataLast: "Feb 11, 2017"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    id: 2,
    name: "Eleni Hobbs",
    message: [
      { type: "", msg: "Hi Yan, How are you?", data: "19/08/2022", time: "21:18" },
      { type: "other", msg: "I am fine.", data: "19/08/2022", time: "21:19" },
      { type: "other", msg: "What about you?", data: "19/08/2022", time: "21:25" },
      { type: "", msg: "Awesome these days.", data: "19/08/2022", time: "21:31" },
      { type: "other", msg: "Finally. What's the plan? Please give me a chance, I want to you", data: "19/08/2022", time: "21:32", trecker: 9, listTime:'Feb 9, 2017' }
    ],
    dataLast: "Feb 9, 2017"
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
    id: 3,
    name: "Elsa Black",
    message: [
      { type: "", msg: "Hi Yan, How are you?", data: "19/08/2022", time: "21:18" },
      { type: "other", msg: "I am fine.", data: "19/08/2022", time: "21:19" },
      { type: "other", msg: "What about you?", data: "19/08/2022", time: "21:25" },
      { type: "", msg: "Awesome these days.", data: "19/08/2022", time: "21:31" },
      { type: "other", msg: " What's the plan? There is a lot to be done and done in general, we need your support. Give me information as soon as possible, I'm sick of doing test tasks"
      , data: "19/08/2022", time: "21:32", trecker: 7, listTime:'Feb 8, 2017' }
    ],
    dataLast: "Feb 8, 2017"
  },
  {
    image:
      "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
    id: 4,
    name: "Kayley Mellor",
    message: [
      { type: "", msg: "Hi Yan, How are you?", data: "19/08/2022", time: "21:18" },
      { type: "other", msg: "I am fine.", data: "19/08/2022", time: "21:19" },
      { type: "other", msg: "What about you?", data: "19/08/2022", time: "21:25" },
      { type: "", msg: "Awesome these days.", data: "19/08/2022", time: "21:31" },
      { type: "other", msg: "Finally. What's the plan? Write as soon as possible", data: "19/08/2022", time: "21:32", trecker: 5, listTime:'Feb 6, 2017' }
    ],
    dataLast: "Feb 6, 2017"
  },
  {
    image:
      "https://media.istockphoto.com/photos/portrait-of-mature-hispanic-man-picture-id805012064?b=1&k=20&m=805012064&s=170667a&w=0&h=7jWoHlRITekFJe0gSCx6CVbpqRWNhGH_KyNH782sqs4=",
    id: 5,
    name: "Alice Fridman",
    message: [
      { type: "", msg: "Hi Yan, How are you?", data: "19/08/2022", time: "21:18" },
      { type: "other", msg: "I am fine.", data: "19/08/2022", time: "21:19" },
      { type: "other", msg: "What about you?", data: "19/08/2022", time: "21:25" },
      { type: "", msg: "Awesome these days.", data: "19/08/2022", time: "21:31" },
      { type: "other", msg: "What's the plan? Yan, please unswer me", data: "19/08/2022", time: "21:32", trecker: 2, listTime:'Feb 5, 2017' }
    ],
    dataLast: "Feb 5, 2017"
  }

];

export { allChatUsers }