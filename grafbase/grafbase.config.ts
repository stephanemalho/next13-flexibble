import { g, auth, config } from '@grafbase/sdk' 

//@ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2 , max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(()=> Project).list().optional(),
}).auth((rules) => {  
  rules.public().read()
})

//@ts-ignore
const Project = g.model('Project', {
  title: g.string().length({ min: 2 }),
  description: g.string().length({ min: 2 , max: 220}),
  image: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
}).auth((rules) => {  
  rules.public().read(),
  rules.private().create().update().delete();
})


const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: g.env('NEXTAUTH_SECRET'),
}) 

export default config({
  schema: g,
  auth: {
    providers: [jwt],
    rules : (rules) => rules.private(),
  },
})
