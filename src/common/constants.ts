import {Dimensions} from 'react-native';
import {theme} from '../constants/theme';

export const COMMON_ANIMATION_DURATION = 400;
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const IS_IPHONE_MINI = () => HEIGHT < 700;

export const MAIN_HORIZONTAL_WIDTH = theme.spacing(3);

export const CATEGORY_ITEMS = [
  {
    imageUrl: require('../assets/category-items/insta.png'),
    name: 'Reels',
    desc: 'Get creative descriptions for your Instagram Reels',
    firstMessage: 'What is your reel about?',
    isLarge: true,
    category: 'Social_media',
    query: 'Create a description for an Instagram Reel about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/facebook.png'),
    name: 'Facebook',
    desc: 'Stand out on Facebook with unique posts',
    firstMessage: 'What do you want the post to be about?',
    category: 'Social_media',
    query: 'Create a Facebook post about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/essay.png'),
    name: 'Essay',
    desc: 'Have a well-structured essay written especially for you',
    category: 'Education',
    firstMessage: 'What is the topic of your essay?',
    query: 'Write an essay on the following topic: {text}',
  },
  {
    imageUrl: require('../assets/category-items/tiktok-2.png'),
    name: 'Tiktok',
    desc: 'Boost your TikTok views with appealing captions',
    firstMessage: 'What is your video about?',
    category: 'Social_media',
    query: 'Create an appealing TikTok caption for a video about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/linkedn.png'),
    name: 'Linkedin Profile',
    desc: 'Create memorable posts on LinkedIn',
    firstMessage: 'What do you want the post to be about?',
    category: 'Social_media',
    query: 'Create a LinkedIn post about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/chatting.png'),
    name: 'Chatting',
    desc: 'Casual conversations on any topic',
    firstMessage: 'Start a chat with AI',
    category: 'Social_media',
    query: 'Start a casual conversation',
  },
  {
    imageUrl: require('../assets/category-items/x.png'),
    name: 'X Profile',
    desc: 'Craft compelling X posts',
    firstMessage: 'What is the topic of your post?',
    category: 'Social_media',
    query: 'Create a compelling X post about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/x.png'),
    name: 'X Posts',
    desc: 'Summarize your text into a short post',
    firstMessage: 'Type the text you want to summarize',
    category: 'Social_media',
    query: 'Summarize the following text into a short X post: {text}',
  },
  {
    imageUrl: require('../assets/category-items/text-sum.png'),
    name: 'Text Summary',
    desc: 'Summarize any text and create a numbered list of its key points',
    firstMessage: 'Type the text you want summarized',
    category: 'EDUCATION',
    query: 'Summarize the following text: {text}',
  },
  {
    imageUrl: require('../assets/category-items/rewriting.png'),
    name: 'Writing',
    desc: 'Fight writer’s block and finish your text',
    firstMessage: 'Type your unfinished text',
    isLarge: true,
    category: 'EDUCATION',
    query: 'Finish the following text: {text}',
  },
  {
    imageUrl: require('../assets/category-items/writing.png'),
    name: 'Rewriting',
    desc: 'Create unique rewrites with high text authenticity',
    firstMessage: 'Type your text',
    category: 'EDUCATION',
    query: 'Rewrite the following text: {text}',
  },
  {
    imageUrl: require('../assets/category-items/type-check.png'),
    name: 'Text Check',
    desc: 'Check any text for spelling and grammatical mistakes',
    firstMessage: 'Type your text',
    category: 'EDUCATION',
    query:
      'Check the following text for spelling and grammatical mistakes: {text}',
  },
  {
    imageUrl: require('../assets/category-items/insta.png'),
    name: 'Content',
    desc: 'Create Instagram posts on any topic',
    firstMessage: 'What do you want the post to be about?',
    category: 'SOCIAL_MEDIA',
    isLarge: true,
    query: 'Create an Instagram post about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/insta-2.png'),
    name: 'Captions',
    desc: 'Come up with engaging captions for your Instagram posts',
    firstMessage:
      'Describe the photo in your post in as much detail as possible',
    category: 'SOCIAL_MEDIA',
    query: 'Create an engaging caption for a photo described as: {text}',
  },
  {
    imageUrl: require('../assets/category-items/ai-art.png'),
    name: 'AI Art',
    desc: 'Create detailed prompts you can use in AI image generators',
    firstMessage: 'Describe the image you want to generate',
    category: 'FUN',
    query:
      'Create a detailed AI image prompt for the following description: {text}',
  },
  {
    imageUrl: require('../assets/category-items/reply-ideas.png'),
    name: 'Reply Ideas',
    desc: 'Explore possible replies to your partner’s messages',
    firstMessage: 'What did your partner say?',
    category: 'COMMUNICATION',
    query: 'Create a reply to the following message: {text}',
  },
  {
    imageUrl: require('../assets/category-items/therapist.png'),
    name: 'Therapist',
    desc: 'Get anything off your chest and have a heart-to-heart with AI',
    firstMessage: 'Type whatever feels right',
    category: 'COMMUNICATION',
    query: 'Provide therapeutic support for the following: {text}',
  },
  {
    imageUrl: require('../assets/category-items/tiktok-2.png'),
    name: 'Tiktok',
    desc: 'Boost your TikTok views with appealing captions',
    firstMessage: 'What is your video about?',
    category: 'SOCIAL_MEDIA',
    query: 'Create an appealing TikTok caption for a video about: {text}',
  },
  {
    imageUrl: require('../assets/category-items/role-play.png'),
    name: 'Role Play',
    desc: 'Talk to AI as if it is someone else',
    firstMessage:
      'What role do you want me to play: your friend, boyfriend, girlfriend, etc.',
    category: 'SOCIAL_MEDIA',
    query: 'Roleplay as {role} and respond to the following: {text}',
  },
  {
    imageUrl: require('../assets/category-items/text-sum.png'),
    name: 'Text Style',
    desc: 'See your text rewritten in another style',
    firstMessage: 'What is the preferred style for the rewritten text?',
    category: 'EDUCATION',
    query: 'Rewrite the following text in the style of {text}',
  },
  {
    imageUrl: require('../assets/category-items/flirting.png'),
    name: 'Flirting',
    desc: 'Ask engaging questions on your first date',
    firstMessage: "What is your partner's sex?",
    category: 'COMMUNICATION',
    query:
      'Suggest engaging questions for a first date with a partner gender: {text}',
  },
  {
    imageUrl: require('../assets/category-items/romance.png'),
    name: 'Romance',
    desc: 'Receive romantic date ideas',
    firstMessage: 'What city are you planning your date in?',
    category: 'COMMUNICATION',
    query: 'Suggest romantic date ideas in {text}',
  },
  {
    imageUrl: require('../assets/category-items/ai.png'),
    name: 'Undetectable AI',
    desc: 'Bypass AI content detectors and make your text plagiarism-free',
    firstMessage: 'Type your text',
    category: 'EDUCATION',
    isLarge: true,
    query:
      'Make the following text undetectable by AI content detectors: {text}',
  },
  {
    imageUrl: require('../assets/category-items/math.png'),
    name: 'Math',
    desc: 'Have any equation solved in a flash',
    firstMessage: 'Type in your equation',
    category: 'EDUCATION',
    query: 'Solve the following equation: {text}',
  },
  {
    name: 'Coding Quest.',
    imageUrl: require('../assets/category-items/coding.png'),
    desc: 'Create well-written interview questions',
    firstMessage: 'Which coding language you want?',
    category: 'EDUCATION',
    query:
      'Create a list of 8 questions for my {text} interview. Do not write explanations in replies.',
  },
  {
    name: 'Physic',
    imageUrl: require('../assets/category-items/physic.png'),
    desc: 'Create well-written physics questions or problems',
    firstMessage: 'Topic about ....?',
    category: 'EDUCATION',
    query:
      'Create a list of 5 questions or problems about physics class. Topic is {text}. Do not write explanations in replies.',
  },
  {
    name: 'Lyrics',
    imageUrl: require('../assets/category-items/lyrics.png'),
    desc: 'Create the lyrics of a song for any genre of music',
    firstMessage: 'What is this song about?',
    category: 'FUN',
    query:
      'Create the lyrics of a song about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Poem',
    imageUrl: require('../assets/category-items/poem.png'),
    desc: 'Create poems in different styles',
    firstMessage: 'What is this poem about?',
    category: 'FUN',
    query:
      'Create the poem about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Story',
    imageUrl: require('../assets/category-items/story.png'),
    desc: 'Create a story from a specific topic',
    firstMessage: 'What is this story about?',
    category: 'FUN',
    query:
      'Create the story about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Short Film',
    imageUrl: require('../assets/category-items/film.png'),
    desc: 'Create a script for a movie',
    firstMessage: 'What is this short film about?',
    category: 'FUN',
    query:
      'Create the short film scenario about {text}. Do not write explanations in replies.',
  },
  {
    name: 'Company Bio',
    imageUrl: require('../assets/category-items/company.png'),
    desc: 'Briefly tell the story of your company',
    firstMessage: 'Company Name and Company aim?',
    category: 'BUSINESS',
    query:
      'Create a company biography. Company name and aim is "{text}". Do not write explanations in replies.',
  },
  {
    name: 'Name-Gen',
    imageUrl: require('../assets/category-items/name.png'),
    desc: 'Find a great name for your brand or product',
    firstMessage: 'What does your brand/product do?',
    category: 'BUSINESS',
    query:
      'Create an efficient company name. Company aim is {text}. Do not write explanations in replies.',
  },
  {
    name: 'Slogan',
    imageUrl: require('../assets/category-items/slogan.png'),
    desc: 'Create a catchy slogan for your business',
    firstMessage: 'What is your business doing?',
    category: 'BUSINESS',
    query:
      'Create a catchy slogan for a business with this emotion {emotion}. Company aim is {text}. Do not write explanations in replies.',
  },
  {
    name: 'Ads',
    imageUrl: require('../assets/category-items/ad.png'),
    desc: 'Promote a product, service, brand or event',
    firstMessage: 'About what?',
    category: 'BUSINESS',
    query:
      'Create an impressive advertisement text about "{text}". Do not write explanations in replies.',
  },
  {
    name: 'Job Ads',
    imageUrl: require('../assets/category-items/job-ads.png'),
    desc: 'Write a job description that attracts ideal candidates',
    firstMessage: 'What position are you hiring for?',
    category: 'BUSINESS',
    query:
      'Create a job advertisement. The position is "{text}". Do not write explanations in replies.',
  },
];
