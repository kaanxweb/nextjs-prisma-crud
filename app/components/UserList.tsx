const UserList: React.FC = () => {
      const users = [
            {
                  id: 1,
                  name: "John",
                  surname: "Doe",
                  age: 25,
                  job: "Developer",
                  company: "Google"
            },
            {
                  id: 2,
                  name: "Jane",
                  surname: "Doe",
                  age: 22,
                  job: "Designer",
                  company: "Facebook"
            },
            {
                  id: 3,
                  name: "Mike",
                  surname: "Doe",
                  age: 30,
                  job: "Manager",
                  company: "Amazon"
            },
            {
                  id: 4,
                  name: "Sara",
                  surname: "Doe",
                  age: 28,
                  job: "Developer",
                  company: "Microsoft"
            },
            {
                  id: 5,
                  name: "David",
                  surname: "Doe",
                  age: 35,
                  job: "Designer",
                  company: "Apple"
            }
      ];

      return (
            <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                              <tr>
                                    <th scope="col" className="px-6 py-3">
                                          Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Surname
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Age
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Job
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Company
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Actions
                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                                    users.map((user) => (
                                          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={user.id}>
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                      {user.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                      {user.surname}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {user.age}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {user.job}
                                                </td>
                                                <td className="px-6 py-4">
                                                      {user.company}
                                                </td>
                                                <td className="space-x-2 px-6 py-4">
                                                      <button type="button" className="btn-primary">
                                                            Edit
                                                      </button>

                                                      <button type="button" className="btn-secondary">
                                                            Delete
                                                      </button>
                                                </td>
                                          </tr>
                                    ))
                              }
                        </tbody>
                  </table>
            </div>
      );
}

export default UserList;