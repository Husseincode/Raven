import os

"""
A program that handles file, create when file doesn't exist
append if user choose, and delete file
"""
class FILE:
    def __init__(self):
        pass
    
    def file_handling():
        # get file name from user
        file_name = input('What is the file name (<file>.txt)? ')
        
        # condition, showing if the file exists
        if (not (os.path.isfile(file_name))):
            create_file = open(file_name, "w")
            text = input ("Type something...\n")
            create_file.write(text)
            create_file.close()
        else:
            print('File does exist')
            question = input("Do you want to append instead (yes or no)? ")
            
            if (question == 'yes'):
                append_text = input('Enter text to be appended...\n')
                with open(file_name, 'a') as file:
                    file.write(append_text)
            elif (question == 'no'):
                print('Action terminated')
                ask = input('Delete instead (yes or no)?')
                if (ask == 'yes'):
                    os.remove(file_name)
                    print("File deleted")
                else:
                    print("File still present")
file = FILE
file.file_handling()