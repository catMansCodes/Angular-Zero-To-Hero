import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/userinterface';
import { HttpClient } from '@angular/common/http';

export interface ApiReference {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {}

  getUserDataFromThisService() {
    return [
      {
        userName: 'jarvis',
        userEmail: 'jarvis@gmail.com',
      },
      {
        userName: 'tonny',
        userEmail: 'tonny@gmail.com',
      },
      {
        userName: 'ironman',
        userEmail: 'ironman@gmail.com',
      },
    ];
  }

  // REST DEMO
  getProductList() {
    const appUrl = 'https://dummyjson.com/products';
    return this.http.get(appUrl);
  }

  // Shared external API references for docs/demo pages.
  getApiReferences(): ApiReference[] {
    return [
      { label: 'DummyJSON', url: 'https://dummyjson.com/' },
      { label: 'JSONPlaceholder Users', url: 'https://jsonplaceholder.typicode.com/users' },
      { label: 'JSON Server (GitHub)', url: 'https://github.com/typicode/json-server' },
    ];
  }

  // User CRUD operations with json server

  userUrl = 'http://localhost:3000/users';

  // 1. get all user
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  // 2. save user
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user);
  }

  // 3. delete user
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(this.userUrl + '/' + id);
  }

  // 4. get user by id
  getUserById(id: string): Observable<User> {
    return this.http.get<User>(this.userUrl + '/' + id);
  }

  // 5. update user
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.userUrl + '/' + user.id, user);
  }
}
