function getStudent(req, res) {

    res.json({
        id: 1,
        name: "Student",
        course: "BTech",
        semester: 3
    });

}

module.exports = {
    getStudent
};