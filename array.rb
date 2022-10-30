# ARRAY CRUD
students = ['Ayaka', 'Alison', 'Andre']

# Create
students << "Alex"
students.push("Adam")
p students

# Read
p students[1]

# Update
students[1] = "Super Alison"
p students

# Delete
# students.delete_at(1)
# students.delete("Ayaka")
p students

# Iterate
students.each do |student|
  p "#{student} is amazing!"
end