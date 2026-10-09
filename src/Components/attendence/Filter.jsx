const formatDate = (value) =>
    new Intl.DateTimeFormat("en-CA").format(new Date(value)); // YYYY-MM-DD

const Filter = (data, course, status, date) => {
    return data.filter((c) => {
        const courseMatch = course === "All" || c.course === course;
        const statusMatch = status === "All" || c.status === status;
        const dateMatch = !date || formatDate(c.date) === date;

        return courseMatch && statusMatch && dateMatch;
    });
};

export default Filter;