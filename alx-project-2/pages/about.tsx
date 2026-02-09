import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Header />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">About Page</h1>
        <p className="text-lg text-zinc-600 mb-8">
          This is the about page of ALX Project 2.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              Button Size Variations
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <Button size="small" shape="rounded-md">
                Small Button
              </Button>
              <Button size="medium" shape="rounded-md">
                Medium Button
              </Button>
              <Button size="large" shape="rounded-md">
                Large Button
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              Button Shape Variations
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <Button size="medium" shape="rounded-sm">
                Rounded Small
              </Button>
              <Button size="medium" shape="rounded-md">
                Rounded Medium
              </Button>
              <Button size="medium" shape="rounded-full">
                Rounded Full
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
              Combined Variations
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <Button size="small" shape="rounded-sm">
                Small + Rounded Small
              </Button>
              <Button size="small" shape="rounded-full">
                Small + Rounded Full
              </Button>
              <Button size="large" shape="rounded-sm">
                Large + Rounded Small
              </Button>
              <Button size="large" shape="rounded-full">
                Large + Rounded Full
              </Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
