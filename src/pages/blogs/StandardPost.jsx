import { Link } from "react-router-dom"

function StandardPost() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-900 px-6 py-24 mb-12">
        <nav className="flex">
          
            <span className="pt-24 text-gray-400 hover:text-gray-300 
"><Link to="/">Home</Link></span>
          
          <span className="text-white pl-5 pt-24">.blog</span>
        </nav>
        <h1 className="text-5xl text-gray-200 font-bold w-3/5 mt-6">
          eCommerce Marketing Statistics You Should Know in 2021.
        </h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="h-12 w-12 rounded-full overflow-hidden">
            <img src="/assets/author-2.png" alt="Author" width={48} height={48} className="object-cover" />
          </div>
          <div className="ml-4">
            <p className="font-medium">Sarah Johnson</p>
            <p className="text-sm text-gray-500">Posted on May 15, 2021 • 8 min read</p>
          </div>
        </div>

        <div className="mb-8">
          <img
            src="/assets/blog-8.png"
            alt="eCommerce Marketing Statistics"
            width={1000}
            height={500}
            className="rounded-lg w-full"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <p>
            The eCommerce industry has seen tremendous growth in recent years, and 2021 is no exception. Understanding
            the latest statistics can help you make informed decisions for your online business.
          </p>

          <h2>Key eCommerce Statistics for 2021</h2>

          <ul>
            <li>Global eCommerce sales are projected to reach $4.9 trillion in 2021</li>
            <li>Mobile commerce will account for 72.9% of all eCommerce sales</li>
            <li>73% of consumers use multiple channels during their shopping journey</li>
            <li>Personalized product recommendations can increase conversion rates by 150%</li>
            <li>Cart abandonment rates average around 69.8%</li>
          </ul>

          <h2>What This Means For Your Business</h2>

          <p>
            With eCommerce continuing to grow at an unprecedented rate, businesses need to adapt their marketing
            strategies to stay competitive. Mobile optimization, omnichannel experiences, and personalization are no
            longer optional—they're essential components of a successful eCommerce strategy.
          </p>

          <p>
            Investing in user experience, streamlining checkout processes, and implementing effective retargeting
            campaigns can significantly reduce cart abandonment and increase your conversion rates.
          </p>

          <h2>Conclusion</h2>

          <p>
            The eCommerce landscape is constantly evolving, and staying informed about the latest trends and statistics
            is crucial for success. By leveraging these insights and implementing strategic marketing initiatives, your
            business can thrive in the competitive world of online retail.
          </p>
        </article>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="mb-3 rounded-lg overflow-hidden">
                <img
                  src="/assets/blog-9.png"
                  alt="Social Media Marketing"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </div>
              <h4 className="font-medium mb-2">Social Media Marketing Trends for 2021</h4>
              <p className="text-sm text-gray-600 mb-3">Discover the latest trends in social media marketing</p>
              <Link to="#" className="text-blue-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="mb-3 rounded-lg overflow-hidden">
                <img src="/assets/blog-3.png" alt="Email Marketing" width={300} height={200} className="w-full" />
              </div>
              <h4 className="font-medium mb-2">Email Marketing Best Practices</h4>
              <p className="text-sm text-gray-600 mb-3">Learn how to optimize your email campaigns</p>
              <Link to="#" className="text-blue-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="mb-3 rounded-lg overflow-hidden">
                <img src="/assets/blog-8.png" alt="SEO Strategies" width={300} height={200} className="w-full" />
              </div>
              <h4 className="font-medium mb-2">SEO Strategies for eCommerce</h4>
              <p className="text-sm text-gray-600 mb-3">Improve your search engine rankings</p>
              <Link to="#" className="text-blue-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardPost
