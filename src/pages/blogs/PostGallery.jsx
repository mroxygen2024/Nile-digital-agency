import { Link } from "react-router-dom";


function PostGallery() {
  const blogPosts = [
    {
      id: 1,
      title: "eCommerce Marketing Statistics You Should Know in 2021",
      excerpt: "Learn about the latest trends and statistics in eCommerce marketing to help grow your business.",
      image: "/assets/blog-8.png",
      author: {
        name: "Sarah Johnson",
        avatar: "/assets/author-2.png",
        date: "May 15, 2021",
      },
    },
    {
      id: 2,
      title: "How Cloud Computing is Transforming Business Operations",
      excerpt: "Discover how cloud solutions are revolutionizing the way companies manage their IT infrastructure.",
      image: "/assets/blog-9.png",
      author: {
        name: "Emily Parker",
        avatar: "/assets/author-3.png",
        date: "May 12, 2021",
      },
    },
    {
      id: 3,
      title: "The Future of Digital Marketing in 2021 and Beyond",
      excerpt: "Explore emerging trends that will shape the digital marketing landscape in the coming years.",
      image: "/assets/blog-3.png",
      author: {
        name: "Sarah Johnson",
        avatar: "/assets/author-2.png",
        date: "May 10, 2021",
      },
    },
   
  ];

  return (
    <div>
    <div className="px-6 py-24 bg-gray-900 relative overflow-hidden header-with-circle">
  <svg
    className="absolute top-0 left-0 w-full h-full z-0 opacity-30 animate-snake"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#4f46e5"
      d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,165.3C672,171,768,181,864,192C960,203,1056,213,1152,186.7C1248,160,1344,96,1392,64L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>

  <nav className="flex relative z-10">
    <span className="pt-24 text-gray-400 hover:text-gray-300">
      <Link to="/">Home</Link>
    </span>
    <span className="text-white pl-5 pt-24">.blog</span>
  </nav>
  <h1 className="text-5xl text-gray-200 font-bold w-3/5 mt-6 relative z-10">
    eCommerce Marketing Statistics You Should Know in 2021.
  </h1>
</div>



      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.author.date}</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to="/blog/standard" className="text-blue-600 hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          {/* <nav className="inline-flex">
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

export default PostGallery;
