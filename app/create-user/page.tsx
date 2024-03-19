const CreateUserPage: React.FC = () => {
      return (
            <div className="max-w-7xl mx-auto my-56 sm:px-6 lg:px-8 space-y-8">
                  <h1 className="text-3xl">Create User</h1>
                  <div className="grid grid-cols-2 gap-y-7 gap-x-14">
                        <div>
                              <input type="text" name="name" className="form-input" placeholder="Name" />
                        </div>
                        <div>
                              <input type="text" name="surname" className="form-input" placeholder="Surname" />
                        </div>
                        <div>
                              <input type="number" name="age" className="form-input" placeholder="Age" />
                        </div>
                        <div>
                              <input type="text" name="job" className="form-input" placeholder="Job" />
                        </div>
                        <div className="col-span-2">
                              <input type="text" name="company" className="form-input" placeholder="Company" />
                        </div>
                  </div>
                  <div className="text-end">
                        <button type="button" className="btn-primary py-3 w-24">
                              Create
                        </button>
                  </div>
            </div>
      );
}

export default CreateUserPage;