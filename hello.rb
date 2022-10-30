# p "Hello 928s"
# p "Hello 928s".class

# p 42.to_s
# p '42'.to_i

# student = "Carla"
# age = 25

# puts "#{student} is #{age} years-old."

# age += 1

# puts "#{student} is #{age} years-old next year."

student = "cArLa"

p student[0]
p student.size
p student.length
# p student.count # ARRAY METHOD

p student.slice(1, 3) #keep 3 chars from index 1

p student.upcase
p student.downcase
p student.capitalize

students_string = "Song, Mounir, Jan, Soufiane, Josh"
another_students_string = "Song Mounir Jan Soufiane Josh"

students = students_string.split(", ")
p students
p another_students_string.split

p students.join
p students.join("~~")