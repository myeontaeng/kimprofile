import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-10 sm:px-10">
        <section className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)]">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
            <div className="flex flex-col items-center gap-6 rounded-[28px] border border-slate-800 bg-slate-950/80 p-8 text-center">
              <div className="rounded-full bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 p-[3px]">
                <div className="relative h-36 w-36 overflow-hidden rounded-full bg-white">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Profile photo"
                    fill
                    className="object-contain object-center"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">I AM</p>
                <p className="text-xl font-semibold text-slate-100">이름: 면탱구리</p>
                <p className="text-sm text-slate-400">PM 서비스 기획 / FE Developer (jr)</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-300 bg-clip-text text-transparent">Contact</h2>
                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <p>Email: <span className="font-medium text-slate-100">leepro@naver.com</span></p>
                  <p>Phone: <span className="font-medium text-slate-100">+82 - 1234 - 5678</span></p>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-800 bg-slate-950/70 p-6">
                <h2 className="text-lg font-semibold bg-gradient-to-r from-fuchsia-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">Channel</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <button className="rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm font-medium text-slate-100 shadow-sm transition hover:bg-slate-800">
                    SNS
                  </button>
                  <button className="rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-left text-sm font-medium text-slate-100 shadow-sm transition hover:bg-slate-800">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)]">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-emerald-300 via-lime-200 to-cyan-300 bg-clip-text text-transparent">Introduce</h2>
          <p className="mt-4 rounded-[24px] border border-slate-800 bg-slate-950/70 p-6 text-slate-300">
            저는 사용자 중심의 UI와 경험을 설계하는 것을 좋아하며, 다양한
            프로젝트를 통해 효율적인 코드와 직관적인 화면 구성을 고민합니다.
          </p>
        </section>

        <section className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-[0_20px_80px_-40px_rgba(15,23,42,0.8)]">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-rose-300 via-orange-300 to-yellow-200 bg-clip-text text-transparent">Tech Skill</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "JS",
              "TS",
              "React",
              "Tailwind CSS",
              "Premiere Pro",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-800 bg-slate-950/70 px-4 py-2 text-sm font-medium text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
