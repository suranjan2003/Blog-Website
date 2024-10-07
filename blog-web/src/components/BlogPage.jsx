import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({ title, date, description, tags, image, link }) => {
    return (
      <div className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={`Image for blog post titled: ${title}`} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-bold line-clamp-2">{title}</h2>
          <p className="text-sm opacity-70 mb-2">{description}</p>
          <div className="flex gap-2 mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm opacity-50">{date}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer" // Security best practice
            className="inline-block mt-2 text-yellow-400 hover:underline hover:text-yellow-500"
          >
            Read more
          </a>
        </div>
      </div>
    );
};

const BlogPage = () => {
    const blogPosts = [
        {
          title: "The Art of Living in the Moment",
          date: "December 7, 2023",
          description: "The blog explores the transformative power of mindfulness in daily life.",
          tags: ["Mindfulness", "Mental Health"],
          image: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800", // Replace with the actual image path
          link: "https://notion.notion.site/The-Art-of-Living-in-the-Moment-a693edef616e4a4485135dd4b9d963ff",
        },
        {
          title: "My Top 10 Books and Why I Love Them",
          date: "October 11, 2023",
          description:
            "Discover my top 10 favorite books and the profound impact they've had on me.",
          tags: ["Books", "Learning"],
          image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800", // Replace with the actual image path
          link: "https://notion.notion.site/My-Top-10-Books-and-Why-I-Love-Them-fe6a00a15eb24d00b44032addb55f553",
        },
        {
            title: "Exploring New Cuisines",
            date: "August 23, 2023",
            description:
              "Exploring New Cuisines: A Culinary Adventure Through Diverse Flavors and Cultures.",
            tags: ["Food", "Travel"],
            image: "https://images.unsplash.com/photo-1616278842935-f36557148755?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800", // Replace with the actual image path
            link: "https://notion.notion.site/Exploring-New-Cuisines-29e35fede34c4834b4620b564473799d",
          },
          {
            title: "The Power of Positive Thinking",
            date: "June 9, 2023",
            description:
              "The Power of Positive Thinking",
            tags: ["Psychology", "Lifestyle"],
            image: "https://images.unsplash.com/photo-1555081944-c0c2f00d06e8?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800", // Replace with the actual image path
            link: "https://notion.notion.site/The-Power-of-Positive-Thinking-810ed290d83040cfbf021c2a1fb3a921",
          },
          {
            title: "My Favorite Hobbies: How I Spend My Free Time",
            date: "October 11, 2023",
            description:
              "My Favorite Hobbies: How I Spend My Free Time - Exploring joy, relaxation, and personal growth through reading, gardening, and cooking.",
            tags: ["Hobby", "Lifestyle"],
            image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800", // Replace with the actual image path
            link: "https://notion.notion.site/My-Favorite-Hobbies-How-I-Spend-My-Free-Time-cf63dc9aabcc4bd7850659a74c16132c",
          }
        // Add more blog post objects as needed
      ];
    
      return (
        <div className="min-h-screen px-4 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <BlogCard key={`${post.title}-${index}`} {...post} />
              ))}
            </div>
          </div>
        </div>
      );
    
}

export default BlogPage