export type ExperienceType = 'Frontend Framework/Library' | 'Backend Framework/Library' 
  | 'Game/3D Engine' | 'Database' | 'State Management' | 'Language' | 'UI Design' | 'Image Editor' | 'Vector Graphics Editor';

export default interface ExperienceDetails {
  image: string;
  experienceType: ExperienceType;
}

export const experienceDetails: ExperienceDetails[] = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
    experienceType: 'Frontend Framework/Library',    
  },
  {
    image: 'https://cdn.iconscout.com/icon/free/png-256/flutter-2038877-1720090.png',
    experienceType: 'Frontend Framework/Library'
  },
  {
    image: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png',
    experienceType: 'Database'
  },
  {
    image: '/experiences/bloc_icon.png',
    experienceType: 'State Management'
  },
  {
    image: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unity-512.png',
    experienceType: 'Game/3D Engine'
  },
  {
    image: 'https://www.nextontop.com/assets/img/services/web/expressjs.svg',
    experienceType: 'Backend Framework/Library'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
    experienceType: 'Language'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    experienceType: 'Language'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    experienceType: 'Frontend Framework/Library'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
    experienceType: 'Language'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    experienceType: 'Frontend Framework/Library'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg',
    experienceType: 'Game/3D Engine'
  },
  {
    image: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png',
    experienceType: 'Database'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
    experienceType: 'State Management'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
    experienceType: 'Language'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg',
    experienceType: 'State Management'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
    experienceType: 'UI Design'
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg',
    experienceType: 'Image Editor'
  },
  {
    image: 'https://pipedream.com/s.v0/app_1dBhP3/logo/orig',
    experienceType: 'Database'
  },
  {
    image: 'https://dwglogo.com/wp-content/uploads/2018/03/Dart_logo.png',
    experienceType: 'Language'
  }
];