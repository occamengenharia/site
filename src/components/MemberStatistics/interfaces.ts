export interface IPropsMemberProgress {
  level: number
  percent: number
  name: string
  urlImg: string
  achievements: IAchievementsProps[]
  total_experience: string
}
interface IConquests {
  emoji: string
  title: string
}

export interface IAchievementsProps{
  createdAt: string
  description: string
  emoji: string
  id: string
  published_at: string
  reward: string
  title: string
  updatedAt: string
}

export interface IMembersStatistics extends IPropsMemberProgress {
  profession: string
  experiencePoints: number
  conquests: Array<IConquests>
  link_github: string
  link_linkedin: string
}
