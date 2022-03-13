export enum Themes {
  linkedin = 'linkedin',
  github = 'github',
  instagram = 'instagram',
  facebook = 'facebook',
  twitter = 'twitter'
}

export type ThemeProps = {
  background: string
}

export const Theme: { [key in Themes]: ThemeProps } = {
  linkedin: {
    background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0) 53.44%
    ),
    #0a66c2;`
  },
  github: {
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 53.44%), #000000;'
  },
  instagram: {
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 53.44%),
      linear-gradient(180deg, #7B4A9B 0%, #D41C88 34.38%, #F16C29 65.62%, #F8AA45 100%);`
  },
  facebook: {
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 53.44%), #3A589E;'
  },
  twitter: {
    background:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 53.44%), #1DA1F3;'
  }
}
