


//typescript
import { PostData, PostMeta } from "../typescript"
//helper
import { convertNumberToArray, getShuffle } from "./helperFunc"

import data from "../functions/postData.json"
import { numberOfPostsOnPage } from "../public/variables"


const postMeta: PostMeta = JSON.parse(JSON.stringify(data));

export const importPostSlugs = () => {
  const fileNames = postMeta.FileNames.map((FileName: string) => { return FileName.substring(0, FileName.length - 3) })
  return fileNames
};


type GetSpecificPhotos = {
  headerPath: string;
  photosPath: string[]
}
const getSubsetPosts = (files: string[], numberOfPosts: number,) => files.slice(0, numberOfPosts);


export const importPhoto = async (path: string) => {
  const markdown = await import(`../content/${"photo's"}/${path}.md`);

  return markdown
};

export const getNumberOfPages = (subject: string) => {
  const amountOfPostPerSubject = subject === "all" ? postMeta.amountOfPosts : postMeta.amountOfPostPerSubject[subject]

  const NumberOfPages = Math.ceil(amountOfPostPerSubject / numberOfPostsOnPage)

  return NumberOfPages
};


export const getSubjectPaths = () => {
  const subjectNames = postMeta.subjectNames

  const NumberOfPagesOfSubject = subjectNames.map((subjectName: string) => {
    const amountOfSubjectPosts = postMeta.postPerSubject[subjectName].length
    const NumberOfPages = Math.ceil(amountOfSubjectPosts / numberOfPostsOnPage)

    const NumberOfPagesArray = convertNumberToArray(NumberOfPages)

    const staticProps = NumberOfPagesArray.map((arr: number) => {
      return {
        params: {
          subject: subjectName,
          id: (arr + 1).toString(),
        }
      }

    })
    return staticProps
  })

  const amountOftotalPosts = postMeta.amountOfPosts
  const NumberOfPages = Math.ceil(amountOftotalPosts / numberOfPostsOnPage)
  const NumberOfPagesArray = convertNumberToArray(NumberOfPages)


  const test1 = NumberOfPagesArray.map((page: number) => {
    return {
      params: {
        subject: "all",
        id: (page + 1).toString(),
      }
    }
  })



  NumberOfPagesOfSubject.push(test1)

  return NumberOfPagesOfSubject.flat()
}


export const getPropsFromPaths = async (slugName: string, slugId: string,) => {
  const numberOfPostsStart = Number(slugId) * numberOfPostsOnPage - numberOfPostsOnPage
  const numberOfPostsStartEnd = Number(slugId) * numberOfPostsOnPage



  const specificPosts = getSpecificPosts(slugName, numberOfPostsStart, numberOfPostsStartEnd)

  const posts = getPostsTest1(specificPosts)
  return posts
}

const getSpecificPosts = (name: string, numberOfPostsStart: number, numberOfPostsStartEnd: number) => {
  if (name === "all") return test(numberOfPostsStart, numberOfPostsStartEnd)
  const postAmount = postMeta.postPerSubject[name].length

  if (numberOfPostsStartEnd > postAmount) return postMeta.postPerSubject[name].slice(numberOfPostsStart)

  return postMeta.postPerSubject[name].slice(numberOfPostsStart, numberOfPostsStartEnd)

}

const test = (numberOfPostsStart: number, numberOfPostsStartEnd: number) => {

  const postAmount = postMeta.amountOfPosts

  if (numberOfPostsStartEnd > postAmount) return postMeta.FileNames.slice(numberOfPostsStart)

  return postMeta.FileNames.slice(numberOfPostsStart, numberOfPostsStartEnd)

}



const getPost = (postPath: any[]) => {
  return Promise.all(
    postPath.map(async (path: any) => {
      const markdown = await import(`../content/posts/${path.path}`);
      return { ...markdown, slug: path.path.substring(0, path.path.length - 3) };
    })
  );
}

const getRandomPaths = (PostNumbers: number[], AllPostPaths: string[]) => {
  const SelectedPostPaths = PostNumbers.map((postNumber) => {
    return AllPostPaths[postNumber]
  })
  return SelectedPostPaths
}

const getRandomNumbers = (amountOfPosts: number, amountOfPicks: number) => {
  if (amountOfPicks > amountOfPosts) return []

  const arrayOfPosts = convertNumberToArray(amountOfPosts)
  const arrayOfPicks = convertNumberToArray(amountOfPicks)
  const shuffle = getShuffle(arrayOfPosts);

  const randomNumbers = arrayOfPicks.map(() => {
    const number = shuffle.next().value
    return number
  })

  return randomNumbers
}
// console.log("test1", test(0, 0))
// console.log("test2", test(0, 6))
// console.log("test3", test(6, 0))
// console.log("test4", test(20, 10))
// console.log("test5", test(2, 1))
// console.log("test6", test(10, 8))
// console.log("test7", test(-20, 10))

export const getPosts = async (amountOfPostFrontPage: number, sortSubject: string = "all") => {

  const postsSortedBySubject = sortSubject === "all" ? data.FileNames : postMeta.postPerSubject[sortSubject]





  const slugs = await getSubsetPosts(postsSortedBySubject, amountOfPostFrontPage)


  const test: PostData[] = await getPostsTest1(slugs)
  const test1 = JSON.parse(JSON.stringify(test));
  return test1
}


export const getSpecificPost = async (slug: string) => {

  const test: PostData[] = await getPostsTest1([slug])
  const test1 = JSON.parse(JSON.stringify(test));
  return test1
}

export const getSpecificPhoto = async (ImagePaths: GetSpecificPhotos) => {
  const headerData = await import(`../content/photo's/${ImagePaths.headerPath}.md`);

  const photosData = await Promise.all(ImagePaths.photosPath.map(async (photoPath) => {
    const photoDataFull = await import(`../content/photo's/${photoPath}.md`);
    return photoDataFull.attributes
  }))

  return { headerData: headerData.attributes, photosData }
};

export const getRandomPostBySubject = async (amountOfPosts: number, subject: string) => {

  const postsBySubject = postMeta.postPerSubject[subject]

  const numberOfTotalPosts = postMeta.amountOfPostPerSubject[subject]

  const randomNumbers = getRandomNumbers(numberOfTotalPosts, amountOfPosts)
  //get randompaths

  const postPath = getRandomPaths(randomNumbers, postsBySubject)
  //get posts

  const postsWithPhotos = getPostsTest1(postPath)

  return postsWithPhotos
}

export const getRandomPosts = async (numberOfPost: number = 1): Promise<PostData[]> => {

  const numberOfTotalPosts = postMeta.amountOfPosts

  const RandomPostNumbers = getRandomNumbers(numberOfTotalPosts, numberOfPost)

  const randomPostPaths = RandomPostNumbers.map((num: number) => postMeta.FileNames[num])

  const Posts = await getPostsTest1(randomPostPaths)

  return Posts
}

export const importPost = async (path: string) => {
  const markdown = await import(`../content/posts/${path}`);

  return markdown
};

const getPostsTest1 = async (postNames: string[]) => {
  const posts: any = await Promise.all(postNames.map(async (slug) => {
    const post = await importPost(slug)

    const headerPath = postMeta.postMeta[slug].headerPhoto
    const photosPath = postMeta.postMeta[slug].photos
    const imagePath = { headerPath, photosPath }

    const photos = await getSpecificPhoto(imagePath)
    return { ...post, photos, slug: slug.substring(0, slug.length - 3) }

  }))

  return posts
}