export interface IPropsMemberProgress {
  level: number
  percent: number
  name: string
  urlImg: string
}
interface IConquests {
  emoji: string
  title: string
}
export interface IMembersStatistics extends IPropsMemberProgress {
  profession: string
  experiencePoints: number
  conquests: Array<IConquests>
  link_github: string
  link_linkedin: string
  slug: string
}
