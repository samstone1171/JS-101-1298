# ARRAY CRUD
students = ['Fred', 'Tash', 'Erika']

# Create
students << "Will"
students.push("Patrik")
p students

# Read
p students[1]

# Update
students[1] = "Super Tash"
p students

# Delete
students.delete_at(1)
students.delete("Fred")
p students

# Iterate
students.each do |student|
  puts "#{student} is amazing!"
end
