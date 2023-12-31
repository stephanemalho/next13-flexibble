export const getUserQuery = `
  query getUser($email: String!) {
    user(by: {email: $email}) {
      id
      name
      email
      avatarUrl 
      description
      githubUrl
      linkedInUrl
    }
  }
`;

export const createUserMutation = `
  mutation createUser($input: CreateUserInput!) {
    userCreate(input: $input) {
      user {
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
      }
    }
  }
`;
