import React, { useEffect, useState } from "react";
import Heading from "../../SharedComponent/Heading/Heading";
import userProfile from "../../constant/constant";

function DevToBlogFeed() {
  const { devBlogProfileLink } = userProfile;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(devBlogProfileLink)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-amber-400 text-xl">Loading articles...</div>
      </div>
    );
  }

  return (
    <div id="Blogs" className=" text-white min-h-screen p-8">
      <Heading text="My Latest Blog" borderHeight={"h-9"} />

      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-700"
            >
              {(post.cover_image || post.social_image) && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.cover_image || post.social_image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-amber-400 hover:text-amber-300 transition-colors">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {post.title}
                  </a>
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.description}
                </p>

                <div className="space-y-2 text-sm text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-semibold">
                      📅 Published:
                    </span>
                    {post.readable_publish_date}
                  </p>

                  {post.tag_list && post.tag_list.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {post.tag_list.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-amber-400 bg-opacity-20 text-amber-400 text-xs rounded-full border border-amber-400 border-opacity-30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between text-xs text-gray-500">
                  <span>💖 {post.public_reactions_count} reactions</span>
                  <span>💬 {post.comments_count} comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p className="text-xl">No articles found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DevToBlogFeed;
