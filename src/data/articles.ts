import type { Article } from "../types/article";

export const articles: Article[] = [
  {
    id: 1,
    title: "Understanding the difference between grid-template and grid-auto",
    date: "Oct 09, 2018",
    content: "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to do with the explicit and implicit grid respectively, I never fully understood what this meant until I read this article by Chris House.",
    author: "Ite Aderinokun",
    authorInfo: "Frontend Developer and User Interface Designer",
    stats: "1 Follow @read@find.com  13.1K followers"
  },
  {
    id: 2,
    title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
    date: "Sep 15, 2018",
    content: "In this article, we'll explore how to recreate GitHub's contribution graph using CSS Grid Layout. This will help demonstrate the power and flexibility of CSS Grid for creating complex layouts.",
    author: "Ite Aderinokun",
    authorInfo: "Frontend Developer and User Interface Designer",
    stats: "2.5K followers"
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Which",
    date: "Nov 12, 2018",
    content: "A comprehensive guide understanding when to use CSS Grid Layout versus Flexbox for your layout needs. Grid is ideal for two-dimensional layouts while Flexbox excels in one-dimensional layouts.",
    author: "Ite Aderinokun",
    authorInfo: "Frontend Developer and User Interface Designer",
    stats: "8.7K followers"
  },
  {
    id: 4,
    title: "Advanced CSS Grid Techniques",
    date: "Dec 01, 2018",
    content: "Exploring advanced CSS Grid techniques including named grid areas, auto-placement, and responsive grid layouts that adapt to different screen sizes.",
    author: "Ite Aderinokun",
    authorInfo: "Frontend Developer and User Interface Designer",
    stats: "5.2K followers"
  }
];