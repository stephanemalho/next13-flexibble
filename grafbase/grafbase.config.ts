import { g, auth, config } from '@grafbase/sdk' 

const User = g.model('User', {
  name: g.string().length({ min: 2 , max: 22}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional().length({ min: 2 , max: 220}),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(()=> Project).list().optional(),
})

const Project = g.model('Project', {
  title: g.string().length({ min: 2 , max: 22}),
  description: g.string().length({ min: 2 , max: 220}),
  image: g.url(),
  liveSiteUrl: g.url().optional(),
  githubUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})


export default config({
  schema: g
 
})
