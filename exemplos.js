mutation{
    createUser(input: {
        name: "Geraldo",
        email: "geraldojunior@gmail.com",
        password: "123456"
    }) {
        name
    }
} 
  