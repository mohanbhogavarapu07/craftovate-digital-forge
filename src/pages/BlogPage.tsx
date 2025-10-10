import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      title: "The Future of Brand Identity in 2025",
      excerpt: "Explore emerging trends in branding and how they're shaping the future of digital identity.",
      category: "Branding",
      date: "Mar 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
    },
    {
      title: "10 Essential UX Principles Every Designer Should Know",
      excerpt: "Master these fundamental UX principles to create intuitive and user-friendly digital experiences.",
      category: "Design",
      date: "Mar 12, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop"
    },
    {
      title: "How to Choose the Right Color Palette for Your Brand",
      excerpt: "A comprehensive guide to selecting colors that resonate with your audience and strengthen your brand.",
      category: "Branding",
      date: "Mar 10, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop"
    },
    {
      title: "The Power of Storytelling in Digital Marketing",
      excerpt: "Learn how to craft compelling narratives that connect with your audience and drive engagement.",
      category: "Marketing",
      date: "Mar 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    },
    {
      title: "Responsive Web Design Best Practices",
      excerpt: "Essential techniques for creating websites that look great and function perfectly on all devices.",
      category: "Development",
      date: "Mar 5, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    },
    {
      title: "Building Trust Through Authentic Brand Communication",
      excerpt: "Discover strategies for creating genuine connections with your audience through authentic messaging.",
      category: "Strategy",
      date: "Mar 3, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
    }
  ];

  const categories = ["All", "Branding", "Design", "Marketing", "Development", "Strategy"];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/5 via-brand-violet/5 to-brand-purple/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, tips, and inspiration from our team of creative experts.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="cursor-pointer hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-violet hover:text-white hover:border-transparent transition-all"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-brand-blue to-brand-violet text-white">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-blue transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-brand-blue font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-brand-blue/10 via-brand-violet/10 to-brand-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights, tips, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-purple text-white rounded-lg hover:shadow-elegant transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
