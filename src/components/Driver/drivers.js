const teams = [
  {
    team: "Mercedes",
    teamImage:
      "https://i.pinimg.com/1200x/57/a4/50/57a45086257807913bbee3ace4922f37.jpg",

    drivers: [
      {
        name: "George Russell",
        nationality: "England",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png",
        image:
          "https://i.pinimg.com/736x/d7/d0/41/d7d041eb12b37c510ea4cb73d0122a77.jpg",
        number: 63,
      },
      {
        name: "Kimi Antonelli",
        nationality: "Italy",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png",
        image:
          "https://i.pinimg.com/736x/11/16/f9/1116f9d030c685acf36dc3b90e7b510e.jpg",
        number: 12,
      },
    ],
  },

  {
    team: "Ferrari",
    teamImage: "https://i.pinimg.com/236x/1d/35/c4/1d35c4d3b28d72877bb5d3a4b8a7d332.jpg",

    drivers: [
      {
        name: "Charles Leclerc",
        nationality: "Monaco",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1280px-Flag_of_Monaco.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnailL",
        image: "https://i.pinimg.com/736x/45/82/67/45826779c4c154976b71aadf31880863.jpg",
        number: 16,
      },
      {
        name: "Lewis Hamilton",
        nationality: "England",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png",
        image: "https://i.pinimg.com/736x/fe/d1/42/fed1426cfd75f62027d567b9ca6e5da9.jpg",
        number: 44,
      },
    ],
  },

  {
    team: "McLaren",
    teamImage: "https://i.pinimg.com/1200x/22/1f/54/221f54c7e780abfe6ce5bbb7efb06d24.jpg",

    drivers: [
      {
        name: "Lando Norris",
        nationality: "England",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png",
        image: "https://i.pinimg.com/736x/10/ed/8b/10ed8b1957eb7e32649a3dd5e48e9ed4.jpg",
        number: 1,
      },
      {
        name: "Oscar Piastri",
        nationality: "Australia",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/330px-Flag_of_Australia_%28converted%29.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        image: "https://i.pinimg.com/1200x/3a/f0/d0/3af0d0b49d122fb8cb3a1b72b19320f6.jpg",
        number: 81,
      },
    ],
  },

  {
    team: "Red Bull Racing",
    teamImage: "https://i.pinimg.com/1200x/8b/cb/a3/8bcba3bd48edfc7fc2da7f148e6b2850.jpg",

    drivers: [
      {
        name: "Max Verstappen",
        nationality: "Netherlands",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/330px-Flag_of_the_Netherlands.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
        image: "https://i.pinimg.com/736x/50/38/6b/50386beb3c9530467488e817813a7349.jpg",
        number: 3,
      },
      {
        name: "Isack Hadjar",
        nationality: "France",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",
        image: "https://i.pinimg.com/736x/fd/e5/e5/fde5e54054a8fb81a8a0733c4c777209.jpg",
        number: 6,
      },
    ],
  },

  {
    team: "Aston Martin",
    teamImage: "https://i.pinimg.com/1200x/16/6d/0e/166d0ef16da67c575c35a6fa6559e0df.jpg",

    drivers: [
      {
        name: "Fernando Alonso",
        nationality: "Spain",
        flag: "https://cdn.britannica.com/36/4336-004-6BD81071/Flag-Spain.jpg",
        image: "https://i.pinimg.com/736x/cb/32/3f/cb323f964b1dbd1ca909f9df1961cdbf.jpg",
        number: 14,
      },
      {
        name: "Lance Stroll",
        nationality: "Canada",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/250px-Flag_of_Canada_%28Pantone%29.svg.png",
        image: "https://i.pinimg.com/736x/c3/b8/ce/c3b8ce47c752cb33bdbfb7ae96e66387.jpg",
        number: 18,
      },
    ],
  },

  {
    team: "Williams",
    teamImage: "https://i.pinimg.com/736x/87/94/3e/87943e0a127de489b4e8ef343966913f.jpg",

    drivers: [
      {
        name: "Alex Albon",
        nationality: "Thailand",
        flag: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/960px-Flag_of_Thailand.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20180215104633",
        image: "https://i.pinimg.com/736x/e4/91/c6/e491c624e4a1fb2e5aff442aa05a0898.jpg",
        number: 23,
      },
      {
        name: "Carlos Sainz",
        nationality: "Spain",
        flag: "https://cdn.britannica.com/36/4336-004-6BD81071/Flag-Spain.jpg",
        image: "https://i.pinimg.com/736x/9d/4f/c0/9d4fc0c51cae902b85fd604bc211342c.jpg",
        number: 55,
      },
    ],
  },

  {
    team: "Haas F1 Team",
    teamImage: "https://i.pinimg.com/1200x/92/fd/43/92fd431a41b0fadeee14fd11702680cb.jpg",

    drivers: [
      {
        name: "Esteban Ocon",
        nationality: "France",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",
        image: "https://i.pinimg.com/1200x/61/37/34/6137343cff501730b215df5e302fac4f.jpg",
        number: 31,
      },
      {
        name: "Oliver Bearman",
        nationality: "England",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png",
        image: "https://i.pinimg.com/736x/5f/33/93/5f3393083a5f3ca76707165985f53432.jpg",
        number: 87,
      },
    ],
  },

  {
    team: "Audi",
    teamImage: "https://i.pinimg.com/736x/b0/f7/eb/b0f7eb6e9c6d5923a044bf4bfa9bcd68.jpg",

    drivers: [
      {
        name: "Nico Hulkenberg",
        nationality: "Germany",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/250px-Flag_of_Germany.svg.png",
        image: "https://i.pinimg.com/736x/1d/b8/8e/1db88ee5ef56b9e8b8caf98198da1243.jpg",
        number: 27,
      },
      {
        name: "Gabriel Bortoleto",
        nationality: "Brazil",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/250px-Flag_of_Brazil.svg.png",
        image: "https://i.pinimg.com/736x/b6/44/f9/b644f93c373790bf186f054bdb33134f.jpg",
        number: 5,
      },
    ],
  },

  {
    team: "Alpine",
    teamImage: "https://i.pinimg.com/1200x/89/65/2d/89652d94b80ad8d9bf6a59b2be5210d7.jpg",

    drivers: [
      {
        name: "Pierre Gasly",
        nationality: "France",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png",
        image: "https://i.pinimg.com/736x/17/09/8f/17098f2999536f17f9fd14e30df1f07b.jpg",
        number: 10,
      },
      {
        name: "Franco Colapinto",
        nationality: "Argentina",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/250px-Flag_of_Argentina.svg.png",
        image: "https://i.pinimg.com/736x/3d/87/02/3d870208fd618c293d78bfce5bc8f195.jpg",
        number: 43,
      },
    ],
  },

  {
    team: "Racing Bulls",
    teamImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFR7dI6Ef7gPwlvIe5_-sQDMWH85CZuNUnZmjXMCISui96oZfREatm1fv&s=10",

    drivers: [
      {
        name: "Liam Lawson",
        nationality: "New Zealand",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/250px-Flag_of_New_Zealand.svg.png",
        image: "https://i.pinimg.com/736x/21/17/77/211777488fafb157f92b7243b9fbfeb6.jpg",
        number: 30,
      },
      {
        name: "Arvid Lindblad",
        nationality: "England",
        flag:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png",
        image: "https://i.pinimg.com/736x/21/39/eb/2139eb7b6fd8f1923a83ca9992f71645.jpg",
        number: 41,
      },
    ],
  },

  {
    team: "Cadillac",
    teamImage: "https://i.pinimg.com/736x/e1/b0/19/e1b019a03fecbc9d4b3cc3c96ef344b0.jpg",

    drivers: [
      {
        name: "Sergio Perez",
        nationality: "Mexico",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/250px-Flag_of_Mexico.svg.png",
        image: "https://i.pinimg.com/736x/3c/e2/80/3ce280fe9eb62573b0b6c7f2b4067f97.jpg",
        number: 11,
      },
      {
        name: "Valtteri Bottas",
        nationality: "Finland",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png",
        image: "https://i.pinimg.com/1200x/60/50/4e/60504e8332dacab3efd6f2cbca95e2c2.jpg",
        number: 77,
      },
    ],
  },
]

export default teams