//
//  ViewController.swift
//  seenthis_export
//
//  Created by Arnaud on 14/04/2017.
//  Copyright © 2017 Arnaud. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var mWebView: UIWebView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        mWebView.loadRequest(URLRequest(url: URL(fileURLWithPath: Bundle.main.path(forResource: "demo/index", ofType: "html")!)))

        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

