export default function BoardMembers({ data }) {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Board of Directors
            </h2>
            <p className="text-xl text-gray-500">
              Each of you has been blessed with one of God’s many wonderful
              gifts to be used in the service of others. So, use your gift well!
              - 1Peter 4:10 (CEV)
            </p>
            {/* <p className="text-m text-gray-500">
              To learn more about our Board of Directors, click on their
              pictures to read their bios
            </p> */}
          </div>
          <ul
            role="list"
            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
          >
            {data.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  {person.photo ? (
                    <>
                      <img
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={person.photo}
                        alt={person.altText}
                      />
                      <div className="space-y-2">
                        <div className="text-lg leading-6 font-medium space-y-1">
                          <h3>{person.name}</h3>
                          <p className="text-indigo-600">{person.role}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ul
            role="list"
            className=" flex flex-col justify-between mx-auto space-y-6 sm:space-y-0 lg:max-w-5xl"
          >
            {" "}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-6">
              Other Board Members
            </h2>
            {data.map((person) => (
              <li key={person.name}>
                <div className="space-y-6">
                  {!person.photo ? (
                    <div className="space-y-6 mt-6">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
